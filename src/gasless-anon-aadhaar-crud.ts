import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  UserAdded,
  RelayerAdded,
  RelayerRemoved,
  GaslessAnonAadhaarCrud
} from "../generated/GaslessAnonAadhaarCrud/GaslessAnonAadhaarCrud"
import { User, AllUsers, Relayer } from "../generated/schema"

export function handleUserAdded(event: UserAdded): void {
  let user = new User(event.params.nullifier.toHexString())
  user.address = event.params.userAddress
  user.nullifier = event.params.nullifier
  
  let contract = GaslessAnonAadhaarCrud.bind(event.address)
  let userData = contract.getUserByNullifier(event.params.nullifier)
  
  user.nullifierSeed = userData.value1
  user.ageAbove18 = userData.value2[0] == BigInt.fromI32(1)
  user.gender = userData.value2[1].toI32()
  user.state = userData.value2[2].toI32()
  user.pincode = userData.value2[3].toI32()
  
  user.save()

  let allUsers = AllUsers.load("ALL")
  if (allUsers == null) {
    allUsers = new AllUsers("ALL")
    allUsers.userCount = 0
    allUsers.users = []
  }
  allUsers.userCount += 1
  let users = allUsers.users
  users.push(user.id)
  allUsers.users = users
  allUsers.save()
}

export function handleRelayerAdded(event: RelayerAdded): void {
  let relayer = new Relayer(event.params.relayer.toHexString())
  relayer.address = event.params.relayer
  relayer.isAuthorized = true
  relayer.save()
}

export function handleRelayerRemoved(event: RelayerRemoved): void {
  let relayer = Relayer.load(event.params.relayer.toHexString())
  if (relayer) {
    relayer.isAuthorized = false
    relayer.save()
  }
}