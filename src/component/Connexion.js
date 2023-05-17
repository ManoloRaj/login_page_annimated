import { useState } from "react";


export function Connexion() {

   
    return (
        <>
            <div className="body">
                <div className="cont_1">
                    <div className="form">
                        <div className="title">
                            Design connexion
                        </div>
                        <div className="welcome">
                            <strong>
                                Welcome!
                            </strong>
                            <p>
                                Sign in by enterrin the information below
                            </p>
                        </div>

                        <div className="input">
                            <input placeholder="email" />
                            <input placeholder="password" />
                            <input type="checkbox" label="Remember me"/>
                            <button>
                                Continue
                                </button>
                            <div className="">
                                Don't have an account? Create one here
                            </div>
                        </div>
                    </div>

                    

                    <div className="image">
                        
                    </div>
                </div>
            </div>
        </>
    );
}