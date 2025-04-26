resource "aws_cloudfront_function" "redirect_profiles" {
  name    = "redirect-angieblandford"
  runtime = "cloudfront-js-1.0"
  publish = true
  code    = file("${path.module}/cloudfront_function_redirect_profiles.js.js")
}

resource "aws_cloudfront_distribution" "cdn" {

  origin {
      domain_name = var.origin_domain_name
      origin_id   = "S3-${var.origin_domain_name}"

      custom_origin_config {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "http-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }


  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for ${var.origin_domain_name}"
  default_root_object = "index.html"

  aliases = var.aliases

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.origin_domain_name}"

    viewer_protocol_policy = "redirect-to-https"
    
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 30
    max_ttl                = 30

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect_profiles.arn
    }
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  price_class = "PriceClass_100" # Adjust based on requirements

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = var.tags
}
