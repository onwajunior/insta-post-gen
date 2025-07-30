# Instagram Post Generator - UI Design

## 📱 Mobile-First Design (Primary)

### Landing Page - Template Selection
```
┌─────────────────────────────────┐
│  Instagram Post Generator       │
│                                 │
│  ┌─────────┐  ┌─────────┐      │
│  │ QUOTE   │  │BUSINESS │      │
│  │  [A]    │  │  [B]    │      │
│  │         │  │         │      │
│  └─────────┘  └─────────┘      │
│                                 │
│  ┌─────────┐  ┌─────────┐      │
│  │PRODUCT  │  │MOTIVATE │      │
│  │  [C]    │  │  [D]    │      │
│  │         │  │         │      │
│  └─────────┘  └─────────┘      │
│                                 │
│     ┌─────────┐                │
│     │MINIMAL  │                │
│     │  [E]    │                │
│     │         │                │
│     └─────────┘                │
│                                 │
│        Tap to start →          │
└─────────────────────────────────┘
```

### Main Editor - Mobile Layout
```
┌─────────────────────────────────┐
│ ← Back           Post Generator │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────────┐│
│  │                             ││
│  │         CANVAS              ││
│  │       1080x1080             ││
│  │    (scaled to fit)          ││
│  │                             ││
│  │     "Your text here"        ││
│  │                             ││
│  │                             ││
│  │                             ││
│  └─────────────────────────────┘│
│                                 │
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Type your message here...   │ │
│ └─────────────────────────────┘ │
│                                 │
│ Font: [Inter] [Playfair]        │
│ Size: [S] [M] [L]              │
│                                 │
│ Colors:                         │
│ ● ● ● ● ● ●                    │
│                                 │
│ ┌─────────────────────────────┐ │
│ │        DOWNLOAD PNG         │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

### Detailed Mobile Components

#### Canvas Area (Main Focus)
```
┌─────────────────────────────────┐
│  CANVAS PREVIEW                 │
│  ┌─────────────────────────────┐│
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  │░                           ░││
│  │░    Template Background    ░││
│  │░                           ░││
│  │░         YOUR TEXT         ░││
│  │░        HERE WITH          ░││
│  │░       NICE STYLING        ░││
│  │░                           ░││
│  │░                           ░││
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░││
│  └─────────────────────────────┘│
│  Real-time preview updates      │
└─────────────────────────────────┘
```

#### Text Input Section
```
┌─────────────────────────────────┐
│  TEXT INPUT                     │
│  ┌─────────────────────────────┐│
│  │ Start typing your message...││
│  │ ▌                          ││
│  └─────────────────────────────┘│
│  Characters: 47/150             │
└─────────────────────────────────┘
```

#### Font & Size Controls
```
┌─────────────────────────────────┐
│  FONT & SIZE                    │
│  ┌─────────┐ ┌─────────────────┐│
│  │ INTER   │ │   Playfair      ││
│  │  [●]    │ │     [ ]         ││
│  └─────────┘ └─────────────────┘│
│                                 │
│  ┌───┐ ┌───┐ ┌───┐             │
│  │ S │ │ M │ │ L │             │
│  │[ ]│ │[●]│ │[ ]│             │
│  └───┘ └───┘ └───┘             │
└─────────────────────────────────┘
```

#### Color Palette
```
┌─────────────────────────────────┐
│  COLOR PALETTES                 │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐│
│  │ ● │ │ ● │ │ ● │ │ ● │ │ ● ││
│  │[●]│ │[ ]│ │[ ]│ │[ ]│ │[ ]││
│  └───┘ └───┘ └───┘ └───┘ └───┘│
│  Classic Warm Cool Nature Bold  │
│                                 │
│         ┌───┐                   │
│         │ ● │                   │
│         │[ ]│                   │
│         └───┘                   │
│         Mono                    │
└─────────────────────────────────┘
```

#### Download Button
```
┌─────────────────────────────────┐
│  ┌─────────────────────────────┐│
│  │    ⬇ DOWNLOAD PNG ⬇       ││
│  │      1080 x 1080            ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

## 💻 Desktop Layout (Secondary)

### Desktop Two-Panel Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  Instagram Post Generator                                       │
├─────────────────────────────────────────────────────────────────┤
│                                   │                             │
│            CANVAS                 │      CONTROLS               │
│         ┌─────────────┐           │                             │
│         │             │           │  ┌───────────────────────┐ │
│         │             │           │  │ Type your message...  │ │
│         │ 1080x1080   │           │  └───────────────────────┘ │
│         │   PREVIEW   │           │                             │
│         │             │           │  Font: [Inter] [Playfair]  │
│         │             │           │  Size: [S] [M] [L]         │
│         │             │           │                             │
│         └─────────────┘           │  Colors: ● ● ● ● ● ●      │
│                                   │                             │
│                                   │  ┌───────────────────────┐ │
│                                   │  │    DOWNLOAD PNG       │ │
│                                   │  └───────────────────────┘ │
│                                   │                             │
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 Visual Hierarchy

### Information Architecture
```
1. CANVAS PREVIEW    ← Primary focus (60% screen)
   └── Live updates
   
2. TEXT INPUT        ← Secondary (20% screen)
   └── Real-time typing
   
3. STYLING OPTIONS   ← Tertiary (15% screen)
   ├── Font selection
   ├── Size options  
   └── Color palettes
   
4. EXPORT ACTION     ← Call-to-action (5% screen)
   └── Download button
```

### Touch Target Sizes
```
┌─────────────────────────────────┐
│  TOUCH TARGETS (minimum 44px)   │
│                                 │
│  ┌──────────┐ ← Template cards  │
│  │   88px   │   (88x88px)       │
│  │  x 88px  │                   │
│  └──────────┘                   │
│                                 │
│  ┌────────────────┐ ← Buttons   │
│  │     44px       │   (min 44px) │
│  └────────────────┘             │
│                                 │
│  ● ← Color dots (32px + padding) │
│                                 │
└─────────────────────────────────┘
```

## 🔄 State Changes & Feedback

### Template Selection Flow
```
Step 1: Template Grid
┌─────────┐  ┌─────────┐
│ QUOTE   │  │BUSINESS │
│  [ ]    │  │  [ ]    │  ← Tap
└─────────┘  └─────────┘

Step 2: Loading State
┌─────────┐  ┌─────────┐
│ QUOTE   │  │BUSINESS │
│  [ ]    │  │  [●]    │  ← Selected
└─────────┘  └─────────┘

Step 3: Navigate to Editor
     ↓
   CANVAS LOADS
```

### Text Input Feedback
```
Empty State:
┌─────────────────────────────┐
│ Tap to add your text...     │
└─────────────────────────────┘

Active State:
┌─────────────────────────────┐
│ Your message here▌          │
└─────────────────────────────┘
Characters: 17/150

Limit Warning:
┌─────────────────────────────┐
│ Your very long message that │
│ might exceed the character..│
└─────────────────────────────┘
Characters: 147/150 ⚠️
```

### Color Palette Selection
```
Default:
● ● ● ● ● ●
[●][ ][ ][ ][ ][ ]

After Selection:
● ● ● ● ● ●
[ ][ ][●][ ][ ][ ]
   ↑
Applied to canvas instantly
```

## 📱 Responsive Breakpoints

### Mobile (320px - 768px)
- Single column layout
- Canvas scaled to fit width
- Stacked controls below canvas
- Large touch targets

### Tablet (768px - 1024px)
- Larger canvas preview
- Side-by-side controls option
- Optimized for touch still

### Desktop (1024px+)
- Two-panel layout
- Canvas on left, controls on right
- Keyboard shortcuts enabled
- Hover states for buttons

## 🎯 Key Design Principles

1. **Canvas First**: Preview dominates the screen
2. **One-Handed Use**: All controls reachable with thumb
3. **Instant Feedback**: Changes appear immediately
4. **Zero Friction**: No unnecessary taps or navigation
5. **Touch Optimized**: Large targets, clear visual feedback

---

**Design Goal**: User never questions what to do next. The flow is intuitive enough that they can create a beautiful post without any instructions. 