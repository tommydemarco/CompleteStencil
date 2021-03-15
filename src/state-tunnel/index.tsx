import { h } from "@stencil/core"
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface TunnelState {
  activeCard: number,
  setActiveCard?: (cardNumber: number) => void
}

export default createProviderConsumer<TunnelState>({
    activeCard: 0
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);