# terraform/modules/route53/variables.tf
variable "domain_name" {
  description = "The root domain name."
  type        = string
}

variable "aliases" {
  description = "Map of subdomains to alias to CloudFront."
  type        = map(string)
  default     = {
#    "www" = "www.groundedminds.ca"
    "dev" = "dev.groundedminds.ca"
  }
}

variable "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  type        = string
}

variable "cloudfront_zone_id" {
  description = "CloudFront distribution zone ID."
  type        = string
}

variable "txt_records" {
  description = "Map of TXT records for DNS validation."
  type        = map(string)
  default     = {}
}

variable "tags" {
  description = "Tags to apply to Route53 resources."
  type        = map(string)
  default     = {}
}
