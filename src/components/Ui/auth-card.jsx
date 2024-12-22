import FormLogin from "@/components/Fragments/FormLogin";

export default function LoginCard() {
  return (
    <div className="card signup-card">
      <h5>Login</h5>
      <FormLogin />
      <p className="text-center">
        Dont have an account? <a href="/auth/sign-in">Sign Up</a>
      </p>
    </div>
  );
}
