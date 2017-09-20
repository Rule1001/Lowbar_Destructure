const path = require("path");
const { expect } = require("chai");
const sinon = require("sinon");

let _ = require(path.join(__dirname, "../lib/once"));

describe("#once", () => {
  it("is a function", () => {
    expect(_.once).to.be.a("function");
  });
  it("calls the original function only once", () => {
    var spy = sinon.spy();
    var spy1 = _.once(spy);
    spy1();
    spy1();
    spy1();
    expect(spy.callCount).to.equal(1);
  });
  it("returns the return value from the original function", () => {
    var spy = sinon.stub().returns(42);
    var spy1 = _.once(spy);
    expect(spy1()).to.equal(42);
  });
  it("calls the original function", () => {
    var spy = sinon.spy();
    var spy1 = _.once(spy);
    spy1();
    expect(spy.called);
  });
});
