import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { Home } from './pages/Home';
import { BrandStory } from './pages/BrandStory';
import { WhyVisit } from './pages/WhyVisit';
import { WhyExhibit } from './pages/WhyExhibit';

function App() {
  const [visitorOpen, setVisitorOpen] = useState(false);
  const [exhibitorOpen, setExhibitorOpen] = useState(false);

  return (
    <div>
      <Header
        onOpenVisitor={() => setVisitorOpen(true)}
        onOpenExhibitor={() => setExhibitorOpen(true)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenVisitor={() => setVisitorOpen(true)}
              onOpenExhibitor={() => setExhibitorOpen(true)}
            />
          }
        />
        <Route path="/brand-story" element={<BrandStory />} />
        <Route
          path="/why-visit"
          element={<WhyVisit onOpenVisitor={() => setVisitorOpen(true)} />}
        />
        <Route
          path="/why-exhibit"
          element={<WhyExhibit onOpenExhibitor={() => setExhibitorOpen(true)} />}
        />
      </Routes>
      <Footer />
      <InquiryModal type="visitor" open={visitorOpen} onClose={() => setVisitorOpen(false)} />
      <InquiryModal type="exhibitor" open={exhibitorOpen} onClose={() => setExhibitorOpen(false)} />
    </div>
  );
}

export default App;
