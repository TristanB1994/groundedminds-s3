# terraform/modules/iam/outputs.tf
output "iam_role_arn" {
  value = aws_iam_role.terraform_role.arn
}
