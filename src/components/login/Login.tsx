import "./login.scss";
import "../common-styles/card.scss";

export default function Login() {
  return (
    <div>
      <form className="user-form">
        <p className="title">Log In</p>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}
