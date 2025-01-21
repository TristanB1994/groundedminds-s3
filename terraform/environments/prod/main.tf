# terraform/environments/prod/main.tf
module "s3" {
  source      = "../../modules/s3"
  bucket_name = "groundedminds-prod"
  tags        = var.tags
}

module "acm" {
  source = "../../modules/acm"

  domain_name               = var.domain_name
  validation_method         = var.certificate_validation_method
  route53_zone_id           = module.route53.zone_id
  # route53_records           = module.acm.txt_records
  tags                      = var.tags
}

module "cloudfront" {
  source               = "../../modules/cloudfront"
  origin_domain_name   = module.s3.bucket_website_endpoint
  acm_certificate_arn  = module.acm.certificate_arn
  #aliases              = ["www.${var.domain_name}", "${var.domain_name}"]
  tags                 = var.tags
}

module "route53" {
  source                 = "../../modules/route53"
  domain_name            = var.domain_name
  #aliases                = {
  #  "www" = "www.${var.domain_name}"
  #  "@"   = var.domain_name
  #}
  cloudfront_domain_name = module.cloudfront.cloudfront_domain_name
  cloudfront_zone_id     = module.cloudfront.cloudfront_zone_id
  txt_records            = module.acm.txt_records
  tags                   = var.tags
}
