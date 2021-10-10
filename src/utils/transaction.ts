import { ContractTransaction, utils } from 'ethers'

export const toRawTxWithSignature = async (
  tx: ContractTransaction,
  chainId: number | undefined,
) => {
  const txData = {
    gasPrice: tx.gasPrice,
    gasLimit: tx.gasLimit,
    value: tx.value,
    nonce: tx.nonce,
    data: tx.data,
    chainId: tx.chainId || chainId,
    to: tx.to,
    type: tx.type,
    accessList: tx.accessList,
    maxPriorityFeePerGas: tx.maxPriorityFeePerGas,
    maxFeePerGas: tx.maxFeePerGas,
  }
  const rsTx = await utils.resolveProperties(txData)
  return {
    rawTx: utils.serializeTransaction(rsTx),
    signature: utils.joinSignature({ r: tx.r || '', s: tx.s, v: tx.v }),
  }
}
