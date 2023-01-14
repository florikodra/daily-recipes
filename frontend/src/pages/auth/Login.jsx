import React from "react";

export const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="row w-50 bg-light p-5 rounded-3 border text-center">
                <h1>Login Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mt-3">
                        <input type="email" name="email" className="form-control px-1" id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mt-3">
                        <input type="password" name="password" className="form-control" id="floatingPassword"
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="mt-3">
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                    </div>
                </form>
            </div>

        </div>
    )
}