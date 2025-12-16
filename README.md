# arashghafoori — Personal Portfolio

This repository contains a React-based personal portfolio website built with Create React App. It includes a production build output in the `build/` folder and a GitHub Actions workflow that builds and deploys the site to an S3 bucket.

**Live deploy target:** `s3://arashghafoori-portfolio.com`

Quick reference

- **Local development:**

	```bash
	npm install
	npm start
	```

	Opens the dev server on `http://localhost:3000`.

- **Run tests:**

	```bash
	npm test
	```

- **Create production build:**

	```bash
	npm run build
	```

	The optimized static site will be output to the `build/` directory.

CI / Deployment

- This repo includes a GitHub Actions workflow (`.github/workflows/nodejs-ci.yml`) that builds the project and deploys the `build/` output to the S3 bucket `s3://arashghafoori-portfolio.com` on pushes to `master`.
- The workflow expects the following repository secrets to be set (Repository → Settings → Secrets → Actions):
	- `AWS_ACCESS_KEY_ID` — Access key for an IAM user with permissions to write to the S3 bucket.
	- `AWS_SECRET_ACCESS_KEY` — Secret key for the IAM user.
	- `CLOUDFRONT_DISTRIBUTION_ID` — (optional) CloudFront distribution ID to invalidate after deploy.

Recommended IAM policy for the deploy user (least-privilege example):

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"s3:PutObject",
				"s3:PutObjectAcl",
				"s3:DeleteObject",
				"s3:ListBucket"
			],
			"Resource": [
				"arn:aws:s3:::arashghafoori-portfolio.com",
				"arn:aws:s3:::arashghafoori-portfolio.com/*"
			]
		},
		{
			"Effect": "Allow",
			"Action": [
				"cloudfront:CreateInvalidation"
			],
			"Resource": "*"
		}
	]
}
```

Notes

- The workflow uses `node-version: '22'` — change this in the workflow if you prefer a different Node version (e.g., `20.x`).
- If your S3 bucket is in a different AWS region, update the `aws-region` value in the workflow.

If you want, I can also:
- Split CI (tests) and deploy workflows into separate files.
- Add a pre-deploy check that ensures `build/` exists before syncing.
- Prepare a branch and PR with these changes.
