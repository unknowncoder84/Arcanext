# Animation Guide - Arcanext Website

## Available Animation Variants

### 1. fadeUp (Default)
```jsx
<AnimatedSection variant="fadeUp">
  <YourContent />
</AnimatedSection>
```
- Fades in from bottom (60px)
- Duration: 0.8s
- Best for: Main content sections

### 2. fadeIn
```jsx
<AnimatedSection variant="fadeIn">
  <YourContent />
</AnimatedSection>
```
- Simple opacity fade
- Duration: 0.8s
- Best for: Subtle reveals

### 3. fadeLeft
```jsx
<AnimatedSection variant="fadeLeft">
  <YourContent />
</AnimatedSection>
```
- Slides in from left (60px)
- Duration: 0.8s
- Best for: Left-aligned content

### 4. fadeRight
```jsx
<AnimatedSection variant="fadeRight">
  <YourContent />
</AnimatedSection>
```
- Slides in from right (60px)
- Duration: 0.8s
- Best for: Right-aligned content

### 5. scaleUp
```jsx
<AnimatedSection variant="scaleUp">
  <YourContent />
</AnimatedSection>
```
- Scales from 0.85 to 1.0
- Duration: 0.8s
- Best for: Images and cards

### 6. pop (NEW!)
```jsx
<AnimatedSection variant="pop">
  <YourContent />
</AnimatedSection>
```
- Spring-based animation
- Scale from 0.8 to 1.0 with bounce
- Stiffness: 100, Damping: 15
- Best for: Call-to-action cards

### 7. slideUp (NEW!)
```jsx
<AnimatedSection variant="slideUp">
  <YourContent />
</AnimatedSection>
```
- Slides up from 80px
- Duration: 0.8s
- Best for: Hero sections

## Stagger Animations

### Basic Stagger
```jsx
<StaggerContainer staggerDelay={0.12}>
  <StaggerItem>
    <Card1 />
  </StaggerItem>
  <StaggerItem>
    <Card2 />
  </StaggerItem>
  <StaggerItem>
    <Card3 />
  </StaggerItem>
</StaggerContainer>
```

### Custom Delay
```jsx
<StaggerContainer staggerDelay={0.15}>
  {/* Items appear 0.15s apart */}
</StaggerContainer>
```

## Animation Parameters

### Delay
```jsx
<AnimatedSection delay={0.2}>
  {/* Starts 0.2s after trigger */}
</AnimatedSection>
```

### Duration
```jsx
<AnimatedSection duration={1.0}>
  {/* Takes 1 second to complete */}
</AnimatedSection>
```

### Once (Repeat on scroll)
```jsx
<AnimatedSection once={false}>
  {/* Animates every time it enters viewport */}
</AnimatedSection>
```

## Image Hover Effects

### Standard Hover
```jsx
<img 
  style={{
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  }}
  onMouseEnter={e => {
    e.target.style.transform = 'scale(1.15)'
    e.target.style.filter = 'brightness(1.1)'
  }}
  onMouseLeave={e => {
    e.target.style.transform = 'scale(1)'
    e.target.style.filter = 'brightness(1)'
  }}
/>
```

## CSS Animations

### Available Classes
- `.animate-fadeInUp` - Fade up animation
- `.animate-fadeIn` - Fade in animation
- `.animate-slideInLeft` - Slide from left
- `.animate-slideInRight` - Slide from right
- `.animate-scaleIn` - Scale up animation
- `.animate-float` - Floating animation (infinite)
- `.animate-pulse` - Pulse animation (infinite)

### Usage
```jsx
<div className="animate-fadeInUp">
  <YourContent />
</div>
```

## Card Hover Effects

Cards automatically have:
- Transform: translateY(-8px) on hover
- Shadow: Enhanced on hover
- Transition: 0.4s cubic-bezier

## Button Animations

Buttons have:
- Ripple effect on hover
- Transform: translateY(-3px) on hover
- Enhanced shadow on hover
- 0.3s cubic-bezier transition

## Best Practices

1. **Use fadeUp for main sections** - Most versatile
2. **Use pop for CTAs** - Draws attention
3. **Use stagger for grids** - Professional sequential reveal
4. **Keep delays under 0.3s** - Avoid feeling sluggish
5. **Use once={true}** - Better performance
6. **Combine with hover effects** - Enhanced interactivity

## Performance Tips

1. Use `will-change: transform` for frequently animated elements
2. Avoid animating expensive properties (width, height)
3. Prefer transform and opacity
4. Use GPU-accelerated properties
5. Keep animation count reasonable per page

## Example Combinations

### Hero Section
```jsx
<AnimatedSection variant="slideUp">
  <h1>Hero Title</h1>
</AnimatedSection>
<AnimatedSection variant="fadeUp" delay={0.2}>
  <p>Subtitle</p>
</AnimatedSection>
```

### Card Grid
```jsx
<StaggerContainer staggerDelay={0.12}>
  {cards.map(card => (
    <StaggerItem key={card.id}>
      <Card {...card} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Alternating Content
```jsx
<AnimatedSection variant="fadeLeft">
  <LeftContent />
</AnimatedSection>
<AnimatedSection variant="fadeRight">
  <RightContent />
</AnimatedSection>
```

## Timing Reference

- **Fast**: 0.3-0.5s (micro-interactions)
- **Normal**: 0.6-0.8s (standard animations)
- **Slow**: 1.0-1.5s (dramatic reveals)
- **Stagger**: 0.1-0.15s (between items)

Your animations are now professional, smooth, and performant! 🎉
