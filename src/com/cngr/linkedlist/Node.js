/*
 * Copyright (c) 2021, Philip A Senger (https://github.com/psenger/multivaluemap/blob/development/LICENSE)
 */

'use strict'

/**
 * A Node constructor option object
 * @typedef {Object} Node~NodeOption
 * @property {Object|null} data - Any kind of data you want to store.
 * @property {Node|null} next - Next node
 * @property {Node|null} prev - Previous node
 */

/**
 * Node, the internal class used within the linked list to assist in linking elements.
 * @constructor
 * @param {Node~NodeOption} [props={data:null,next:null,prev:null}] - the Options to pass to the
 * constructor
 * @param {Object|null} [props.data=null] - the data to store
 * @param {Node|null} [props.next=null] - the next node, or null
 * @param {Node|null}[props.prev=null] - the previous node, or null
 */
class Node {
  constructor (props) {
    this._data = props?.data || null
    this._next = props?.next || null
    this._prev = props?.prev || null
  }

  /**
   * Get the data from this node, which can be what ever you want.
   * @return {*|null} the data stored here.
   */
  getData () {
    return this._data
  }

  /**
   * Set the data in this node.
   * @param {*|null} data - the data to store.
   */
  setData (data) {
    this._data = data
  }

  /**
   * Get the next node, null indicates that it is the end.
   * @return {Node|null} the next node.
   */
  getNext () {
    return this._next
  }

  /**
   * Set the next node, null indicates the end.
   * @param {Node|null} node - the next node.
   */
  setNext (node) {
    this._next = node
  }

  /**
   * Get the previous node. The value null indicate the end has been reached.
   * @return {Node|null} the previous node.
   */
  getPrev () {
    return this._prev
  }

  /**
   * Set the previous node, null indicates the end.
   * @param {Node|null} node - the previous node.
   */
  setPrev (node) {
    this._prev = node
  }
}

module.exports = Node
