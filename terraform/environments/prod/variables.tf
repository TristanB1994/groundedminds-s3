# terraform/environments/prod/variables.tf
variable "domain_name" {
  description = "The root domain name."
  type        = string
}

variable "certificate_validation_method" {
  description = "Method to validate ACM certificates."
  type        = string
  default     = "DNS"
}

variable "tags" {
  description = "Tags to apply to all resources."
  type        = map(string)
  default = {
    Environment = "prod"
    Project     = "groundedminds"
  }
}
