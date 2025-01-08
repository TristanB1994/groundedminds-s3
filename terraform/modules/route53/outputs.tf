# terraform/modules/route53/outputs.tf
output "zone_id" {
  value = data.aws_route53_zone.primary.zone_id
}
