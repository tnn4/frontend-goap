import { createPlan } from "./goap_planner"

export const initialState = {
  player: {
    weapon_equipped: false,
    bullets: 0,
    clips: 1
  },
  enemy: {
    visible: false,
    alive: true
  }
};

export const actions = {
  equipWeapon: {
    condition: ( s:any ) => !s.player.weapon_equipped,
    effect: (s: any)  => {
      s.player.weapon_equipped = true;
      return s;
    },
    cost: (_s: any) => 2
  },
  reload: {
    condition: (s : any) => s.player.weapon_equipped && s.player.clips > 0,
    effect: (s : any) => {
      s.player.bullets += 6;
      return s;
    },
    cost: (_s: any) => 2
  },
  fire: {
    condition: (s : any) =>
      s.enemy.visible === true &&
      s.player.weapon_equipped &&
      s.player.bullets > 0,
    effect: (s : any) => {
      s.player.bullets--;
      s.enemy.alive = false;
      return s;
    },
    cost: (_s: any) => 2
  },
  useTurret: {
    condition: (s : any) => s.enemy.visible,
    effect: (s : any) => {
      s.enemy.alive = false;
      return s;
    },
    cost: (_s: any) => 10
  },
  knifeAttack: {
    condition: (s : any) => s.enemy.visible,
    effect: (s : any) => {
      s.enemy.alive = false;
      return s;
    },
    cost: (_s: any) => 12
  },
  scout: {
    condition: (s : any) => !s.enemy.visible,
    effect: (s : any) => {
      s.enemy.visible = true;
      return s;
    },
    cost: (_s: any) => 1
  },
  hide: {
    condition:  (_s : any) => true,
    effect: (s : any) => {
      s.enemy.visible = false;
      return s;
    },
    cost: (_s: any) => 1
  }
};

export const goals = {
  killEnemy: {
    label: "Kill Enemy",
    validate: (/* prevState: any, */ nextState: any) => {
      return nextState.enemy.alive === false;
    }
  },
  hide: {
    label: "Hide",
    validate: (/* prev: any, */ next: any) => {
      return next.enemy.visible === false;
    }
  }
};

const logPlan = (plan: any/* ,i: number */)=> {
  if (!plan)
    return
  console.log(`-- Best plan(${plan.cost}) for ${plan.goal.label} --`)
  plan.actions.map( (a:any,i:number)=> console.log(`${i+1}) ${a}`) )
}

export function runGoap() {
  const plan2 = createPlan(initialState, actions, goals.killEnemy);
  logPlan(plan2)
}

/*
it("can plan actions", () => {
  
  
  // expect(plan2).toBeTruthy();
  logPlan(plan2)

  let hideState = initialState
  hideState.enemy.visible = true
  const plan3 = createPlan(hideState, actions, goals.hide);
  // expect(plan3).toBeTruthy();
  logPlan(plan3)
});
*/