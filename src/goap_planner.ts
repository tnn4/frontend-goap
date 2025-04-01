
// npm install lodash
// npm i --save-dev @types/lodash
import { merge } from "lodash/fp/object";
// npm install fastpriorityqueue
import PriorityQueue from "fastpriorityqueue";

class GoapNode {
  parent: any;
  cost: number;
  state: any;
  action: any;
  key: any;
  constructor(parent:any, cost:number, state:any, action:any) {
    this.parent = parent;
    this.cost = cost;
    this.state = merge({}, state);
    this.key = action ? action.key : null;
    this.action = action;
  }
}

const mapActions = (actions: any) => {
  actions = merge({}, actions)
  return Object.keys(actions).map(key => {
    return { ...actions[key], key };
  });
};

const buildGraph = (parent: any, leaves: any, actions: any, goal: any) => {
  actions.forEach( (action: any ) => {
    if (action.condition(parent.state)) {
      let nextState = action.effect(merge({}, parent.state));
      const cost = parent.cost + action.cost(nextState);
      const node = new GoapNode(parent, cost, nextState, action);
      if (goal.validate(parent.state, nextState)) {
        leaves.add(node);
      } else {
        const subset = actions.filter((a:any) => a.key !== action.key);
        return buildGraph(node, leaves, subset, goal);
      }
    }
  });
  return leaves;
};

const getPlanFromLeaf = (node: any, goal: any) => {
  const plan = [];
  const cost = node.cost;
  while (node) {
    if (node.action) plan.unshift(node.action);
    node = node.parent;
  }
  return {
    cost,
    goal,
    actions: plan.map(n => n.key)
  };
};

export const createPlan = (state: any, actions: any, goal: any) => {
  const root = new GoapNode(null, 0, state, null);
  const leaves = new PriorityQueue((a: any, b: any) => a.cost < b.cost);
  buildGraph(root, leaves, mapActions(actions), goal);
  if (!leaves.isEmpty()) return getPlanFromLeaf(leaves.poll(), goal);
  return null;
};
