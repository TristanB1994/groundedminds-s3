# terraform/modules/route53/main.tf
#resource "aws_route53_zone" "primary" {
#  name = var.domain_name
#}

data "aws_route53_zone" "primary" {
  name = "groundedminds.ca"
}
# TODO: Define route53 zonne data resource, domain is managed by old porject and hosts production

resource "aws_route53_record" "a_record" {
  for_each = toset(keys(var.aliases))

  zone_id = data.aws_route53_zone.primary.zone_id
  name    = each.key == "@" ? var.domain_name : "${each.key}.${var.domain_name}"
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "txt_records" {
  for_each = var.txt_records

  zone_id = data.aws_route53_zone.primary.zone_id
  name    = each.key
  type    = "TXT"
  ttl     = 300
  records = [each.value]
}
