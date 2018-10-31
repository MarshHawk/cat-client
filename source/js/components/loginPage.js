import React from 'react';

const LoginPage = ({ loginWithAuth }) => {
    return (<section id="header">
    <header>
        <h1>Cat Suite</h1>
        <p>An Academic Library Information Organization Web Application</p>
    </header>    
    <div className="col-12">
		<ul className="actions">
            <li>
                <input type='text' className="text button style2 scrolly-middle" placeholder="Username" />
            </li>
            <li>
                <input type='password' className="text button style2 scrolly-middle" placeholder="Password" />
            </li>
		</ul>
        <ul className="actions">
            <li onClick={(event) => loginWithAuth({})}>
                <a className="button style2 scrolly-middle">Login</a>
            </li>
		</ul>
	</div>
</section> );
}
 
export default LoginPage;