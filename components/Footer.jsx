import React from "react"

function Footer() {
  return (
    <div className="grid-col-1 grid gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How It Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Kuzimba Plus</p>
        <p>Kuzimba Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Membership</h5>
        <p>Be a host</p>
        <p>Visit our community forum</p>
        <p>Explore Resources</p>
        <p>Member Responsibility</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Safety Information</p>
        <p>Cancellation Options</p>
        <p>Support for people with disabilities</p>
        <p>Concerns</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Relief housing</p>
        <p>Support for refugees</p>
        <p>Discrimination assistance</p>
      </div>
    </div>
  )
}

export default Footer
