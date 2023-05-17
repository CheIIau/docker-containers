import { render } from '@solidjs/testing-library'
import InfoPage from '../src/pages/InfoPage'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

describe('InfoPage', () => {
  it('renders the page', () => {
    const { getByText } = render(() => <InfoPage />)
    expect(getByText('Some info')).toBeInTheDocument()
  })
})
