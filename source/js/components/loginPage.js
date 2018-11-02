import React, { Component, PropTypes } from 'react';

const LoginPage = ({ username, password, loginWithAuth, changeUsername, changePassword }) => {
    return (<section id="header">
    <header>
        <h1>Cat Suite</h1>
        <h3>An Information Organization</h3>
        <h3>Web Application</h3>
    </header>    
    <div className="col-12">
        <ul className="actions">
            <li>
                <input type='text' value={username} className="text button style2 scrolly-middle" 
                onChange={(event) => changeUsername(event.target.value)} />
            </li>
            <li>
                <input type='password' value={password} className="text button style2 scrolly-middle" 
                onChange={(event) => changePassword(event.target.value)} />
            </li>
		</ul>
        <ul className="actions">
            <li onClick={() => loginWithAuth(username, password)}>
                <a className="button style2 scrolly-middle">Login</a>
            </li>
		</ul>
	</div>
</section> );
}
 
export default LoginPage;