# Instagram Post Generator - MVP Scope

## 🎯 MVP Goal: Beautiful Post in Under 30 Seconds

**Core Promise**: A user opens the app, picks a template, adds their text, tweaks the color, and downloads a professional Instagram post in under 30 seconds.

## ✨ The Magic Moment

```
1. See beautiful templates (5 seconds)
2. Tap one, it loads instantly (3 seconds)  
3. Tap text area, type message (10 seconds)
4. Pick a color (5 seconds)
5. Tap download (2 seconds)
6. Beautiful 1080x1080 PNG ready to post (5 seconds buffer)
```

**Total: ~30 seconds from open to download**

## 🚀 MVP Features (Keep It Simple)

### Template System - MINIMAL
- **5 High-Quality Templates**: 
  - Quote/Text Template (clean background + text)
  - Business Announcement (professional layout)
  - Product Showcase (focus on main text + subtitle)
  - Motivational (bold typography)
  - Minimalist (lots of white space)
- **No Categories**: Simple grid, scroll to browse
- **Instant Loading**: Templates load immediately on click

### Text Editing - ONE TEXT FIELD
- **Single Text Input**: One main text area per template
- **2 Fonts**: 
  - `Inter` (clean, modern)
  - `Playfair Display` (elegant, serif)
- **3 Text Sizes**: Small, Medium, Large (preset sizes)
- **Auto-fit**: Text automatically positions nicely within template
- **Character Limit**: 150 characters max (enforced, not just suggested)

### Color Customization - SIMPLE
- **6 Preset Color Palettes**: 
  - Classic (black/white)
  - Warm (oranges/browns)
  - Cool (blues/teals)
  - Nature (greens)
  - Bold (bright colors)
  - Monochrome (grays)
- **One-Click Apply**: Palette changes text + accent colors instantly
- **No Custom Colors**: Keeps it simple, prevents choice paralysis

### Canvas & Export - INSTANT
- **Fixed 1080x1080**: No size options
- **Real-time Preview**: Changes appear immediately
- **One-Click Download**: Big "Download" button
- **PNG Export**: High quality, optimized file size
- **No Save/Load**: Everything is ephemeral

## 📱 Mobile-First MVP

### Core Mobile Experience
- **Touch-First**: Everything designed for thumbs
- **Single Column Layout**: Tools stack vertically below canvas
- **Canvas Scaling**: Canvas fits mobile screen perfectly
- **Large Touch Targets**: Buttons minimum 44px
- **Instant Feedback**: Visual feedback for all taps

### Simplified Mobile Flow
```
[Canvas Preview - Full Width]
[Text Input - Large Field]
[Font Toggle - 2 Options]
[Size Toggle - 3 Options] 
[Color Palette - 6 Swatches]
[Download Button - Large & Prominent]
```

## 🛠 MVP Technical Stack

### Ultra-Simple Tech
- **React 18**: Functional components only
- **HTML5 Canvas**: Direct Canvas API, no complex libraries
- **CSS Grid/Flexbox**: Responsive layout
- **Google Fonts**: Just Inter + Playfair Display
- **No External Libraries**: Keep bundle size tiny

### Canvas Implementation
```javascript
// Simple canvas drawing - no fancy libraries
const canvas = useRef();
const ctx = canvas.current.getContext('2d');

// Draw template background
// Draw text with selected font/size/color
// Export as PNG
```

### File Structure (Minimal)
```
src/
  components/
    Canvas.jsx          // Main canvas component
    TemplateGrid.jsx    // 5 template thumbnails
    TextInput.jsx       // Single text input
    ColorPalette.jsx    // 6 color swatches
    DownloadButton.jsx  // Export functionality
  templates/
    templates.js        // 5 template definitions
  App.jsx
  main.jsx
```

## 🎨 MVP User Flow

### 30-Second Journey
1. **Landing** (2s): See 5 beautiful template previews
2. **Select** (3s): Tap template → Canvas loads with placeholder text
3. **Edit** (15s): 
   - Tap text area → Mobile keyboard opens
   - Type message → Live preview updates
   - Tap font toggle if desired
   - Tap size if needed
4. **Style** (5s): Tap color palette → Instant preview update
5. **Export** (5s): Tap download → PNG generates and downloads

### Zero Friction Points
- No sign-up required
- No loading screens (everything cached)
- No complex menus or navigation
- No file management
- No save/load workflow

## 📐 MVP Design Constraints

### Template Design Rules
- **Preset Text Positions**: No dragging, text goes in designated area
- **Single Text Element**: One main text per template
- **High Contrast**: All color palettes ensure text readability
- **Mobile-Safe**: All templates look good on phone screens

### Canvas Specifications
- **1080x1080px**: Fixed Instagram format
- **72 DPI**: Web standard
- **PNG Export**: With transparency support
- **Max File Size**: Under 1MB

## ✅ MVP Success Metrics

### Speed Test
- [ ] Template loads in under 1 second
- [ ] Text input responds immediately
- [ ] Color changes apply instantly (under 0.5s)
- [ ] PNG generates in under 3 seconds
- [ ] Total flow completable in 30 seconds

### Quality Test
- [ ] Exported PNG looks professional
- [ ] Text is crisp and readable
- [ ] Colors match preview exactly
- [ ] Works on iPhone Safari and Chrome Mobile
- [ ] No lag or janky animations

## 🚫 Explicitly NOT in MVP

### Features to Add Later
- Multiple text layers
- Custom fonts
- Custom colors
- Drag and drop positioning
- Image uploads
- Template categories
- User accounts
- Save/load designs
- Social sharing
- Undo/redo
- Keyboard shortcuts

### Technical Complexity to Avoid
- Complex canvas libraries (Fabric.js, Konva)
- State management (Redux, Zustand)
- Routing (React Router)
- Build optimization
- Performance monitoring
- Error tracking

## 🎯 MVP Definition of Done

**A user can:**
1. Open the app on their phone
2. See 5 beautiful template options
3. Tap one and see it load instantly
4. Add their text and see live preview
5. Pick a color palette with one tap
6. Download a high-quality 1080x1080 PNG
7. Complete entire flow in under 30 seconds
8. Get a result that looks professionally designed

**Technical requirements:**
- Works on iOS Safari and Chrome Mobile
- Loads in under 3 seconds on 3G
- Bundle size under 500KB
- Zero runtime errors
- Clean, accessible code

---

**MVP Mantra**: "Beautiful posts, instantly" - Every feature must either make the posts more beautiful OR make the process faster. If it does neither, it's not in the MVP. 