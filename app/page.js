'use client';
import { useState } from 'react';
import { ContactAPI } from './ContactAPI';
import Link from 'next/link';

// exports a function that shows all Contacts stored in API
export default function Contacts() {
	const [allContacts, _] = useState(ContactAPI.all());
	
	return (
		<main>
			<div className='row'>
				<div style={{textAlign: 'center'}}>
					<h1 style={{paddingBottom: 20, paddingTop: 10}} >All Contacts</h1>
					<Link href={`/contacts/new`}>
            <button type='button' className='btn btn-dark'>Add Contact</button>
						</Link>

						<br />
						<br />

					<div style={{textAlign: 'center'}} className=''>
								{allContacts.map((c) => (
									
						<div key={c.name} style={{paddingBottom: 20, backgroundColor: 'whitesmoke', paddingTop: 20}}>	

						<table class="table table-dark">
  						<thead>
    						<tr>
									<th scope="col">Profile Picture</th>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Phone Number</th>
								</tr>
							</thead>
						</table>

            </div>
						))}
        	</div>
					</div>
			</div>
		</main>
	);
}















{/* 
						<p className='col-md-3' style={{display: 'inline-block'}}><strong>Profile Pic</strong></p>
						<p className='col-md-3' style={{display: 'inline-block'}}><strong>Name</strong></p>
						<p className='col-md-3' style={{display: 'inline-block'}}><strong>Email</strong></p>
						<p className='col-md-3' style={{display: 'inline-block'}}><strong>Phone Number</strong></p>
						

						<div style={{textAlign: 'center'}} className=''>
								{allContacts.map((c) => (
									
						<div key={c.name} style={{paddingBottom: 20, backgroundColor: 'whitesmoke', paddingTop: 20}}>	
							<img className='col-md-3' style={{display: 'inline-block', width: 120, height: 'auto', borderRadius: '50%'}} src={c.imageUrl}></img>
							<p className='col-md-3' style={{display: 'inline-block', paddingLeft: 200}}><Link href={`/contacts/${c.id}`}>{c.name} </Link></p>
							<p className='col-md-3' style={{display: 'inline-block', paddingLeft: 180}}>{c.email}</p>
							<p className='col-md-3' style={{display: 'inline-block', paddingLeft: 200}}>{c.number}</p>

            </div>
						))}
        	</div> */}
