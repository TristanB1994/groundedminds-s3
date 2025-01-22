data "aws_route53_zone" "primary" {
  name = "groundedminds.ca"
}

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