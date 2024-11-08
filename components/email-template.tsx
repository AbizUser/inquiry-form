interface EmailTemplateProps {
  username: string,
  email: string,
  content: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content,
}) => {
  return(
    <div>
      <h1>Hello! here is {username}</h1>
      <p>This mail is send from {email}</p>
      <p>{content}</p>
    </div>
  );
};