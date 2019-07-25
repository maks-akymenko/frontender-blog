import styled from 'styled-components';

export const Emoji = styled.span.attrs(({ label }) => ({
  role: 'img',
  'aria-label': label,
}))``
