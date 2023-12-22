"use client";
import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import UserContext from './contexts/UserContext';
import { useContext } from 'react';

const SignInButton = () => {

  const { data: session } = useSession();

  const context = useContext(UserContext);

  if(session && session.user) {
    context.setLoggedIn(true)
    return (
      <div style={{position: "absolute", top: 30+'px', right: 50+'px'}}>
        <p>Signed in as {session.user.name}</p>
        <button className='btn btn-danger' onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  };

  return (
    <button className='btn btn-primary position-absolute' style={{position: "absolute", top: 30+'px', right: 50+'px'}} onClick={() => signIn()}>Sign In with Google</button>
  )
};

export default SignInButton;