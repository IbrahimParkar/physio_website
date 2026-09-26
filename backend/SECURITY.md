# Security Notes

- Use PostgreSQL in production with a managed provider that supports encrypted connections and automated backups.
- Store database URLs and secrets only in environment variables.
- Add authentication before using real patient data. Recommended roles: patient, doctor, and admin.
- Restrict patient endpoints so a patient can only see their own profile and cases.
- Use HTTPS everywhere.
- Avoid storing sensitive medical attachments until file permissions and audit logging are implemented.
- Keep clinical notes concise and access-controlled because they are sensitive health information.

