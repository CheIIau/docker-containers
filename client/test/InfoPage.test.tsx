import { render } from '@solidjs/testing-library'
import InfoPage from '../src/pages/InfoPage'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { Router } from '@solidjs/router'

describe('InfoPage', () => {
  it('renders the page', () => {
    const { getByText } = render(() => <Router><InfoPage /></Router>)
    expect(getByText('Some info')).toBeInTheDocument()
  })
})
