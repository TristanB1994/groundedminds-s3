# terraform/modules/iam/variables.tf
variable "tags" {
  description = "Tags to apply to IAM resources."
  type        = map(string)
  default     = {}
}
