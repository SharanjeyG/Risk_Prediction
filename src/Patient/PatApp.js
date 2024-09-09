import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import ChatApp from './ChatApp'
import ReportPage from './ReportPage'


function PatApp() {
  return (
    <>
      <Header />
      <Routes>
          {/* Home Route - Chatbot and Video */}
          <Route path="/" element={
            <ChatApp />
          } />
          
          {/* Report Page Route */}
          <Route path="/report" element={<ReportPage />} />
        </Routes>
    </>
  )
}

export default PatApp