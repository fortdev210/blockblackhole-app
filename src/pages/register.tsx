import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/atoms/button";
import Input from "components/atoms/input";
import { useAuth } from "context/authContext";

export default function Register() {
  const navigate = useNavigate();

  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await register(username, password);
      navigate("/feedback");
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full p-10">
        <div className="m-auto w-96">
          <p className="text-2xl">Sign up for hydrosat</p>
          <div className="mb-3">
            <Input
              id="username"
              type="text"
              placeholder="Input username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </div>
          <div className="mb-3">
            <Input
              id="password"
              type="password"
              placeholder="Input your password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <div className="mt-3 flex justify-between align-center">
            <Button onClick={handleSubmit} loading={loading}>
              Register
            </Button>
            <p>
              Have account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
