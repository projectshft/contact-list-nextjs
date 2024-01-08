'use client';
import { useState } from 'react';
import { ContactAPI } from '../../app/ContactAPI.js';
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

						<table class="table table-dark">
							<thead>
									<tr>
									<th className='col-md-3'>Profile Picture</th>
									<th className='col-md-3'>Name</th>
									<th className='col-md-3'>Email</th>
									<th className='col-md-3'>Phone Number</th>
								</tr>
							</thead>
						</table>

						<table className='table'>
								{allContacts.map((c) => (
							
									
							<tr key={c.name}>
							<td className='col-md-3'><img style={{height: 120, width: 120, borderRadius: '50%'}} src={c.imageUrl}></img></td>
							<td className='col-md-3'><Link href={`/contacts/${c.id}`}>{c.name} </Link></td>
							<td className='col-md-3'>{c.email}</td>
							<td className='col-md-3'>{c.number}</td>
							</tr>
							))}
        	</table>
				</div>
			</div>
		</main>
	);
}