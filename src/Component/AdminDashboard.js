import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import axios from 'axios';

function AdminDashboard() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/api/blog-posts')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('/api/volunteers')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('/api/donations')
      .then(response => {
        setDonations(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteBlogPost = (id) => {
    axios.delete(`/api/blog-posts/${id}`)
      .then(response => {
        setBlogPosts(blogPosts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteVolunteer = (id) => {
    axios.delete(`/api/volunteers/${id}`)
      .then(response => {
        setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteDonation = (id) => {
    axios.delete(`/api/donations/${id}`)
      .then(response => {
        setDonations(donations.filter(donation => donation.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="blog-posts">
        <h2>Blog Posts</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => handleDeleteBlogPost(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="volunteers">
        <h2>Volunteers</h2>
        <ul>
          {volunteers.map((volunteer) => (
            <li key={volunteer.id}>
              {volunteer.name}
              <button onClick={() => handleDeleteVolunteer(volunteer.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="donations">
        <h2>Donations</h2>
        <ul>
          {donations.map((donation) => (
            <li key={donation.id}>
              {donation.amount}
              <button onClick={() => handleDeleteDonation(donation.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;