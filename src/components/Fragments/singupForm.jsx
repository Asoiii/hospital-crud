import Input from "../Elements/input/Input";
import Button from "../Elements/Button/Button";

export default function SignUpForm() {
  return (
    <form>
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="Password" required />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
