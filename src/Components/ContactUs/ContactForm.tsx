import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleyvdrl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
