import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1>Contact List App</h1>
          <p className="lead">Keep track of your contacts</p>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row  row-cols-md-2 g-5 justify-content-center d-flex gap-0">
          <div className="col d-flex justify-content-end">
            <div className="card h-100 text-center" style={{ width: "17rem" }}>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title fw-bold">View Contacts</h5>
                <p className="card-text">
                  View and search all of your contacts
                </p>
                <Link href="/contacts">
                  <button className="btn btn-primary btn-sm text-white">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-start">
            <div className="card h-109 text-center" style={{ width: "17rem" }}>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title fw-bold">Add Contact</h5>
                <p className="card-text">Create and add a new contact</p>
                <Link href="/contacts/new">
                  <button className="btn btn-primary btn-sm text-white">
                    Add
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
