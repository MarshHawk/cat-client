import React from 'react'

const LoginPage = () => {
    return ( <section id="header">
    <header>
        <h1>Cat Suite</h1>
        <h3>An Information Organization</h3>
        <h3>Web Application</h3>
    </header>    
    <div className="col-12">
		<ul className="actions">
			<li><input className="text button style2 scrolly-middle" placeholder="Username"/></li>
            <li><input className="text button style2 scrolly-middle" placeholder="Password" /></li>
		</ul>
        <ul className="actions">
			<li><a className="button style2 scrolly-middle">Login</a></li>
		</ul>
	</div>
</section> );
}
 
export default LoginPage;