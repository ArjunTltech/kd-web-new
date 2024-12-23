'use client'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.error)

      setStatus('success')
      setMessage('Thanks for subscribing!')
      setEmail('')
      toast.success('Thanks for subscribing!')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Something went wrong')
      toast.error(error.message || 'Something went wrong')
    }
  }

  return (
    <div>
      <form className="newsletter-form mb-50" onSubmit={handleSubmit}>
        <input
          id="news-email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="theme-btn bgc-secondary style-two"
          disabled={status === 'loading'}
        >
          <span data-hover="Subscribe">Subscribe</span>
          <i className="fal fa-arrow-right" />
        </button>
      </form>
    </div>
  )
}
