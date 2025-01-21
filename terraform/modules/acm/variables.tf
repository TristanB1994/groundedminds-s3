# terraform/modules/acm/variables.tf
variable "domain_name" {
  description = "The domain name for the certificate."
  type        = string
}

variable "validation_method" {
  description = "The method to validate the certificate."
  type        = string
  default     = "DNS"
}

variable "route53_zone_id" {
  description = "The Route53 zone ID."
  type        = string
}

variable "tags" {
  description = "Tags to apply to ACM resources."
  type        = map(string)
  default     = {}
}
