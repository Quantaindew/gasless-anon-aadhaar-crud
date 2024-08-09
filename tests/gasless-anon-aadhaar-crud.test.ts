import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { RelayerAdded } from "../generated/schema"
import { RelayerAdded as RelayerAddedEvent } from "../generated/GaslessAnonAadhaarCrud/GaslessAnonAadhaarCrud"
import { handleRelayerAdded } from "../src/gasless-anon-aadhaar-crud"
import { createRelayerAddedEvent } from "./gasless-anon-aadhaar-crud-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let relayer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newRelayerAddedEvent = createRelayerAddedEvent(relayer)
    handleRelayerAdded(newRelayerAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RelayerAdded created and stored", () => {
    assert.entityCount("RelayerAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RelayerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "relayer",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
