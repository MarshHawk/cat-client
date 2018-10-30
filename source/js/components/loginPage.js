import React from 'react'

const LoginPage = () => {
    return ( <section id="header">
    <header>
        <h1>Cat Suite</h1>
        <p>An Academic Library Information Organization Web Application</p>
    </header>    
    <div class="col-12">
		<ul class="actions">
			<li><input className="text button style2 scrolly-middle" placeholder="Username"/></li>
            <li><input className="text button style2 scrolly-middle" placeholder="Password" /></li>
		</ul>
        <ul class="actions">
			<li><a className="button style2 scrolly-middle">Login</a></li>
		</ul>
	</div>
</section> );
}
 
export default LoginPage;