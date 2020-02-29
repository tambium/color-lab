import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { RGB, HSL, PerceptuallyUniform } from '../components/lessons';
import { Logo } from '../components/logo';
import { breakpoints } from '../constants';

const HEADER_HEIGHT = 64;

const SkewedSection = styled.section`
  position: relative;
  &:before {
    background-color: #f9fafc;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewy(-2deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
  }
`;

const Home = (): React.ReactNode => {
  return (
    <React.Fragment>
      <nav
        style={{
          alignItems: 'center',
          backdropFilter: 'saturate(180%) blur(20px)',
          backgroundColor: 'rgba(255,255,255,0.72)',
          borderBottom: '1px solid #ececec',
          display: 'flex',
          justifyContent: 'space-between',
          height: HEADER_HEIGHT,
          padding: '0 24px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <Logo height={40} width={40} />
          <div style={{ fontSize: 21, fontWeight: 600 }}>Tambium</div>
        </div>
        <Link href="/color-lab">
          <a
            style={{
              alignItems: 'baseline',
              backgroundColor: '#000',
              border: 0,
              borderRadius: 6,
              borderWidth: 0,
              boxSizing: 'border-box',
              color: '#fff',
              display: 'inline-flex',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '28px',
              maxWidth: '100%',
              outline: 'none !important',
              padding: '4px 16px',
              textAlign: 'center',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Go to lab →
          </a>
        </Link>
      </nav>
      <section>
        <div
          style={{
            paddingLeft: 24,
            paddingBottom: 120,
            paddingTop: HEADER_HEIGHT + 120,
            paddingRight: 24,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: breakpoints.md,
          }}
        >
          <h1 style={{ fontSize: 42, lineHeight: 1.25, marginBottom: 16 }}>
            Tooling for accessible color systems
          </h1>
          <p style={{ fontSize: 24, lineHeight: 1.4, marginBottom: 32 }}>
            Color lab uses perceptual color models (specifically, CIELCh) to
            give real-time feedback on accessibility.
          </p>
          <Link href="/color-lab">
            <a
              style={{
                alignItems: 'baseline',
                backgroundColor: '#000',
                border: 0,
                borderRadius: 6,
                borderWidth: 0,
                boxSizing: 'border-box',
                color: '#fff',
                display: 'inline-flex',
                fontStyle: 'normal',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: '28px',
                maxWidth: '100%',
                outline: 'none !important',
                padding: '8px 24px',
                textAlign: 'center',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Get started
            </a>
          </Link>
        </div>
      </section>
      <SkewedSection>
        <div
          style={{
            maxWidth: breakpoints.md,
            margin: '0 auto',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 120,
            paddingBottom: 120,
            position: 'relative',
          }}
        >
          <h1 style={{ fontSize: 42, lineHeight: 1.25, marginBottom: 16 }}>
            Digital color theory
          </h1>
          <p style={{ fontSize: 24, lineHeight: 1.4, marginBottom: 64 }}>
            To get the most from color lab, it’s helpful to be familiar with
            terms used to describe a color’s position within the color spectrum.
          </p>
          <div>
            <div
              style={{
                color: '#fff',
                backgroundColor: '#000',
                borderRadius: 4,
                display: 'inline-block',
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 16,
                padding: '4px 8px',
              }}
            >
              RGB
            </div>
            <p style={{ fontSize: 18, marginBottom: 24 }}>
              RGB is a popular color model that describes color in three
              dimensions: red, green and blue.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 8,
                display: 'inline-flex',
                padding: 48,
              }}
            >
              <RGB />
            </div>
          </div>
          <p style={{ fontSize: 18, marginBottom: 64 }}>
            The hexademical (hex) syntax used in web design is a derivation of
            RGB. These descriptions of color are convenient when working with an
            existing system, but are unintuitive when mixing a new color set.
          </p>
          <div>
            <div
              style={{
                color: '#fff',
                backgroundColor: '#000',
                borderRadius: 4,
                display: 'inline-block',
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 16,
                padding: '4px 8px',
              }}
            >
              HSL
            </div>
            <p style={{ fontSize: 18, marginBottom: 24 }}>
              HSL (hue, saturation and lightness) remaps RGB into dimensions
              that makes human interpretation simpler. Hue is the color type
              (like red, blue or yellow); saturation controls the amount of
              color used, and lightness reflects the intensity of color.
            </p>

            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  display: 'inline-flex',
                  padding: 48,
                  width: '100%',
                }}
              >
                <HSL />
              </div>
            </div>
            <p style={{ fontSize: 18, marginBottom: 64 }}>
              The trouble with RGB and its derivations is that they are
              irregular, meaning the way we perceive the spectrum of hues with
              fixed lightness and saturation is non-linear. Notice that some of
              the colors appear lighter or more saturated than others.
            </p>
          </div>
          <div>
            <div
              style={{
                color: '#fff',
                backgroundColor: '#000',
                borderRadius: 4,
                display: 'inline-block',
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 16,
                padding: '4px 8px',
              }}
            >
              CIELCh
            </div>
            <p style={{ fontSize: 18, marginBottom: 24 }}>
              Perceptually uniform color spaces attempt to model human
              perception of color. CIELCh (lightness, chroma and hue) is one
              example where colors that share the same value for a dimension are
              guaranteed to look similar.
            </p>
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  display: 'inline-flex',
                  padding: 48,
                  width: '100%',
                }}
              >
                <PerceptuallyUniform />
              </div>
            </div>
            <p style={{ fontSize: 18 }}>
              This color spectrum blends together more seamlessly thanks to
              color transformations that account for human perception. These
              transformations can result in so-called imaginary colors that
              aren’t perceivable to the human eye and that’s the real magic of
              building color systems with perceptually uniform models — feedback
              on accessibility.
            </p>
          </div>
        </div>
      </SkewedSection>
    </React.Fragment>
  );
};

export default Home;
