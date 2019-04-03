/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PlayerCreateInput: { // input type
    losses: number; // Int!
    name: string; // String!
    race: string; // String!
    realm: NexusGenInputs['RealmCreateOneWithoutPopulationInput']; // RealmCreateOneWithoutPopulationInput!
    wins: number; // Int!
  }
  PlayerCreateManyWithoutRealmInput: { // input type
    connect?: NexusGenInputs['PlayerWhereUniqueInput'][] | null; // [PlayerWhereUniqueInput!]
    create?: NexusGenInputs['PlayerCreateWithoutRealmInput'][] | null; // [PlayerCreateWithoutRealmInput!]
  }
  PlayerCreateWithoutRealmInput: { // input type
    losses: number; // Int!
    name: string; // String!
    race: string; // String!
    wins: number; // Int!
  }
  PlayerScalarWhereInput: { // input type
    _id?: string | null; // ID
    _id_contains?: string | null; // ID
    _id_ends_with?: string | null; // ID
    _id_gt?: string | null; // ID
    _id_gte?: string | null; // ID
    _id_in?: string[] | null; // [ID!]
    _id_lt?: string | null; // ID
    _id_lte?: string | null; // ID
    _id_not?: string | null; // ID
    _id_not_contains?: string | null; // ID
    _id_not_ends_with?: string | null; // ID
    _id_not_in?: string[] | null; // [ID!]
    _id_not_starts_with?: string | null; // ID
    _id_starts_with?: string | null; // ID
    AND?: NexusGenInputs['PlayerScalarWhereInput'][] | null; // [PlayerScalarWhereInput!]
    losses?: number | null; // Int
    losses_gt?: number | null; // Int
    losses_gte?: number | null; // Int
    losses_in?: number[] | null; // [Int!]
    losses_lt?: number | null; // Int
    losses_lte?: number | null; // Int
    losses_not?: number | null; // Int
    losses_not_in?: number[] | null; // [Int!]
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['PlayerScalarWhereInput'][] | null; // [PlayerScalarWhereInput!]
    OR?: NexusGenInputs['PlayerScalarWhereInput'][] | null; // [PlayerScalarWhereInput!]
    race?: string | null; // String
    race_contains?: string | null; // String
    race_ends_with?: string | null; // String
    race_gt?: string | null; // String
    race_gte?: string | null; // String
    race_in?: string[] | null; // [String!]
    race_lt?: string | null; // String
    race_lte?: string | null; // String
    race_not?: string | null; // String
    race_not_contains?: string | null; // String
    race_not_ends_with?: string | null; // String
    race_not_in?: string[] | null; // [String!]
    race_not_starts_with?: string | null; // String
    race_starts_with?: string | null; // String
    wins?: number | null; // Int
    wins_gt?: number | null; // Int
    wins_gte?: number | null; // Int
    wins_in?: number[] | null; // [Int!]
    wins_lt?: number | null; // Int
    wins_lte?: number | null; // Int
    wins_not?: number | null; // Int
    wins_not_in?: number[] | null; // [Int!]
  }
  PlayerUpdateInput: { // input type
    losses?: number | null; // Int
    name?: string | null; // String
    race?: string | null; // String
    realm?: NexusGenInputs['RealmUpdateOneRequiredWithoutPopulationInput'] | null; // RealmUpdateOneRequiredWithoutPopulationInput
    wins?: number | null; // Int
  }
  PlayerUpdateManyDataInput: { // input type
    losses?: number | null; // Int
    name?: string | null; // String
    race?: string | null; // String
    wins?: number | null; // Int
  }
  PlayerUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['PlayerUpdateManyDataInput']; // PlayerUpdateManyDataInput!
    where: NexusGenInputs['PlayerScalarWhereInput']; // PlayerScalarWhereInput!
  }
  PlayerUpdateManyWithoutRealmInput: { // input type
    connect?: NexusGenInputs['PlayerWhereUniqueInput'][] | null; // [PlayerWhereUniqueInput!]
    create?: NexusGenInputs['PlayerCreateWithoutRealmInput'][] | null; // [PlayerCreateWithoutRealmInput!]
    delete?: NexusGenInputs['PlayerWhereUniqueInput'][] | null; // [PlayerWhereUniqueInput!]
    deleteMany?: NexusGenInputs['PlayerScalarWhereInput'][] | null; // [PlayerScalarWhereInput!]
    disconnect?: NexusGenInputs['PlayerWhereUniqueInput'][] | null; // [PlayerWhereUniqueInput!]
    set?: NexusGenInputs['PlayerWhereUniqueInput'][] | null; // [PlayerWhereUniqueInput!]
    update?: NexusGenInputs['PlayerUpdateWithWhereUniqueWithoutRealmInput'][] | null; // [PlayerUpdateWithWhereUniqueWithoutRealmInput!]
    updateMany?: NexusGenInputs['PlayerUpdateManyWithWhereNestedInput'][] | null; // [PlayerUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['PlayerUpsertWithWhereUniqueWithoutRealmInput'][] | null; // [PlayerUpsertWithWhereUniqueWithoutRealmInput!]
  }
  PlayerUpdateWithWhereUniqueWithoutRealmInput: { // input type
    data: NexusGenInputs['PlayerUpdateWithoutRealmDataInput']; // PlayerUpdateWithoutRealmDataInput!
    where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
  }
  PlayerUpdateWithoutRealmDataInput: { // input type
    losses?: number | null; // Int
    name?: string | null; // String
    race?: string | null; // String
    wins?: number | null; // Int
  }
  PlayerUpsertWithWhereUniqueWithoutRealmInput: { // input type
    create: NexusGenInputs['PlayerCreateWithoutRealmInput']; // PlayerCreateWithoutRealmInput!
    update: NexusGenInputs['PlayerUpdateWithoutRealmDataInput']; // PlayerUpdateWithoutRealmDataInput!
    where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
  }
  PlayerWhereInput: { // input type
    _id?: string | null; // ID
    _id_contains?: string | null; // ID
    _id_ends_with?: string | null; // ID
    _id_gt?: string | null; // ID
    _id_gte?: string | null; // ID
    _id_in?: string[] | null; // [ID!]
    _id_lt?: string | null; // ID
    _id_lte?: string | null; // ID
    _id_not?: string | null; // ID
    _id_not_contains?: string | null; // ID
    _id_not_ends_with?: string | null; // ID
    _id_not_in?: string[] | null; // [ID!]
    _id_not_starts_with?: string | null; // ID
    _id_starts_with?: string | null; // ID
    AND?: NexusGenInputs['PlayerWhereInput'][] | null; // [PlayerWhereInput!]
    losses?: number | null; // Int
    losses_gt?: number | null; // Int
    losses_gte?: number | null; // Int
    losses_in?: number[] | null; // [Int!]
    losses_lt?: number | null; // Int
    losses_lte?: number | null; // Int
    losses_not?: number | null; // Int
    losses_not_in?: number[] | null; // [Int!]
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    race?: string | null; // String
    race_contains?: string | null; // String
    race_ends_with?: string | null; // String
    race_gt?: string | null; // String
    race_gte?: string | null; // String
    race_in?: string[] | null; // [String!]
    race_lt?: string | null; // String
    race_lte?: string | null; // String
    race_not?: string | null; // String
    race_not_contains?: string | null; // String
    race_not_ends_with?: string | null; // String
    race_not_in?: string[] | null; // [String!]
    race_not_starts_with?: string | null; // String
    race_starts_with?: string | null; // String
    realm?: NexusGenInputs['RealmWhereInput'] | null; // RealmWhereInput
    wins?: number | null; // Int
    wins_gt?: number | null; // Int
    wins_gte?: number | null; // Int
    wins_in?: number[] | null; // [Int!]
    wins_lt?: number | null; // Int
    wins_lte?: number | null; // Int
    wins_not?: number | null; // Int
    wins_not_in?: number[] | null; // [Int!]
  }
  PlayerWhereUniqueInput: { // input type
    _id?: string | null; // ID
  }
  RealmCreateInput: { // input type
    name: string; // String!
    population?: NexusGenInputs['PlayerCreateManyWithoutRealmInput'] | null; // PlayerCreateManyWithoutRealmInput
  }
  RealmCreateOneWithoutPopulationInput: { // input type
    connect?: NexusGenInputs['RealmWhereUniqueInput'] | null; // RealmWhereUniqueInput
    create?: NexusGenInputs['RealmCreateWithoutPopulationInput'] | null; // RealmCreateWithoutPopulationInput
  }
  RealmCreateWithoutPopulationInput: { // input type
    name: string; // String!
  }
  RealmUpdateInput: { // input type
    name?: string | null; // String
    population?: NexusGenInputs['PlayerUpdateManyWithoutRealmInput'] | null; // PlayerUpdateManyWithoutRealmInput
  }
  RealmUpdateOneRequiredWithoutPopulationInput: { // input type
    connect?: NexusGenInputs['RealmWhereUniqueInput'] | null; // RealmWhereUniqueInput
    create?: NexusGenInputs['RealmCreateWithoutPopulationInput'] | null; // RealmCreateWithoutPopulationInput
    update?: NexusGenInputs['RealmUpdateWithoutPopulationDataInput'] | null; // RealmUpdateWithoutPopulationDataInput
    upsert?: NexusGenInputs['RealmUpsertWithoutPopulationInput'] | null; // RealmUpsertWithoutPopulationInput
  }
  RealmUpdateWithoutPopulationDataInput: { // input type
    name?: string | null; // String
  }
  RealmUpsertWithoutPopulationInput: { // input type
    create: NexusGenInputs['RealmCreateWithoutPopulationInput']; // RealmCreateWithoutPopulationInput!
    update: NexusGenInputs['RealmUpdateWithoutPopulationDataInput']; // RealmUpdateWithoutPopulationDataInput!
  }
  RealmWhereInput: { // input type
    _id?: string | null; // ID
    _id_contains?: string | null; // ID
    _id_ends_with?: string | null; // ID
    _id_gt?: string | null; // ID
    _id_gte?: string | null; // ID
    _id_in?: string[] | null; // [ID!]
    _id_lt?: string | null; // ID
    _id_lte?: string | null; // ID
    _id_not?: string | null; // ID
    _id_not_contains?: string | null; // ID
    _id_not_ends_with?: string | null; // ID
    _id_not_in?: string[] | null; // [ID!]
    _id_not_starts_with?: string | null; // ID
    _id_starts_with?: string | null; // ID
    AND?: NexusGenInputs['RealmWhereInput'][] | null; // [RealmWhereInput!]
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    population_some?: NexusGenInputs['PlayerWhereInput'] | null; // PlayerWhereInput
  }
  RealmWhereUniqueInput: { // input type
    _id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  PlayerOrderByInput: "_id_ASC" | "_id_DESC" | "losses_ASC" | "losses_DESC" | "name_ASC" | "name_DESC" | "race_ASC" | "race_DESC" | "wins_ASC" | "wins_DESC"
  RealmOrderByInput: "_id_ASC" | "_id_DESC" | "name_ASC" | "name_DESC"
}

export interface NexusGenRootTypes {
  Mutation: {};
  Player: { // root type
    _id: string; // ID!
    losses: number; // Int!
    name: string; // String!
    race: string; // String!
    wins: number; // Int!
  }
  Query: {};
  Realm: { // root type
    _id: string; // ID!
    name: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PlayerCreateInput: NexusGenInputs['PlayerCreateInput'];
  PlayerCreateManyWithoutRealmInput: NexusGenInputs['PlayerCreateManyWithoutRealmInput'];
  PlayerCreateWithoutRealmInput: NexusGenInputs['PlayerCreateWithoutRealmInput'];
  PlayerScalarWhereInput: NexusGenInputs['PlayerScalarWhereInput'];
  PlayerUpdateInput: NexusGenInputs['PlayerUpdateInput'];
  PlayerUpdateManyDataInput: NexusGenInputs['PlayerUpdateManyDataInput'];
  PlayerUpdateManyWithWhereNestedInput: NexusGenInputs['PlayerUpdateManyWithWhereNestedInput'];
  PlayerUpdateManyWithoutRealmInput: NexusGenInputs['PlayerUpdateManyWithoutRealmInput'];
  PlayerUpdateWithWhereUniqueWithoutRealmInput: NexusGenInputs['PlayerUpdateWithWhereUniqueWithoutRealmInput'];
  PlayerUpdateWithoutRealmDataInput: NexusGenInputs['PlayerUpdateWithoutRealmDataInput'];
  PlayerUpsertWithWhereUniqueWithoutRealmInput: NexusGenInputs['PlayerUpsertWithWhereUniqueWithoutRealmInput'];
  PlayerWhereInput: NexusGenInputs['PlayerWhereInput'];
  PlayerWhereUniqueInput: NexusGenInputs['PlayerWhereUniqueInput'];
  RealmCreateInput: NexusGenInputs['RealmCreateInput'];
  RealmCreateOneWithoutPopulationInput: NexusGenInputs['RealmCreateOneWithoutPopulationInput'];
  RealmCreateWithoutPopulationInput: NexusGenInputs['RealmCreateWithoutPopulationInput'];
  RealmUpdateInput: NexusGenInputs['RealmUpdateInput'];
  RealmUpdateOneRequiredWithoutPopulationInput: NexusGenInputs['RealmUpdateOneRequiredWithoutPopulationInput'];
  RealmUpdateWithoutPopulationDataInput: NexusGenInputs['RealmUpdateWithoutPopulationDataInput'];
  RealmUpsertWithoutPopulationInput: NexusGenInputs['RealmUpsertWithoutPopulationInput'];
  RealmWhereInput: NexusGenInputs['RealmWhereInput'];
  RealmWhereUniqueInput: NexusGenInputs['RealmWhereUniqueInput'];
  PlayerOrderByInput: NexusGenEnums['PlayerOrderByInput'];
  RealmOrderByInput: NexusGenEnums['RealmOrderByInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPlayer: NexusGenRootTypes['Player']; // Player!
    createRealm: NexusGenRootTypes['Realm']; // Realm!
    deletePlayer: NexusGenRootTypes['Player'] | null; // Player
    deleteRealm: NexusGenRootTypes['Realm'] | null; // Realm
    updatePlayer: NexusGenRootTypes['Player'] | null; // Player
    updateRealm: NexusGenRootTypes['Realm'] | null; // Realm
    upsertPlayer: NexusGenRootTypes['Player']; // Player!
  }
  Player: { // field return type
    _id: string; // ID!
    losses: number; // Int!
    name: string; // String!
    race: string; // String!
    realm: NexusGenRootTypes['Realm']; // Realm!
    wins: number; // Int!
  }
  Query: { // field return type
    player: NexusGenRootTypes['Player'] | null; // Player
    players: NexusGenRootTypes['Player'][]; // [Player!]!
    realm: NexusGenRootTypes['Realm'] | null; // Realm
    realms: NexusGenRootTypes['Realm'][]; // [Realm!]!
  }
  Realm: { // field return type
    _id: string; // ID!
    name: string; // String!
    population: NexusGenRootTypes['Player'][] | null; // [Player!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlayer: { // args
      data: NexusGenInputs['PlayerCreateInput']; // PlayerCreateInput!
    }
    createRealm: { // args
      data: NexusGenInputs['RealmCreateInput']; // RealmCreateInput!
    }
    deletePlayer: { // args
      where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
    }
    deleteRealm: { // args
      where: NexusGenInputs['RealmWhereUniqueInput']; // RealmWhereUniqueInput!
    }
    updatePlayer: { // args
      data: NexusGenInputs['PlayerUpdateInput']; // PlayerUpdateInput!
      where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
    }
    updateRealm: { // args
      data: NexusGenInputs['RealmUpdateInput']; // RealmUpdateInput!
      where: NexusGenInputs['RealmWhereUniqueInput']; // RealmWhereUniqueInput!
    }
    upsertPlayer: { // args
      create: NexusGenInputs['PlayerCreateInput']; // PlayerCreateInput!
      update: NexusGenInputs['PlayerUpdateInput']; // PlayerUpdateInput!
      where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
    }
  }
  Query: {
    player: { // args
      where: NexusGenInputs['PlayerWhereUniqueInput']; // PlayerWhereUniqueInput!
    }
    players: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PlayerOrderByInput'] | null; // PlayerOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PlayerWhereInput'] | null; // PlayerWhereInput
    }
    realm: { // args
      where: NexusGenInputs['RealmWhereUniqueInput']; // RealmWhereUniqueInput!
    }
    realms: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['RealmOrderByInput'] | null; // RealmOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['RealmWhereInput'] | null; // RealmWhereInput
    }
  }
  Realm: {
    population: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PlayerOrderByInput'] | null; // PlayerOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PlayerWhereInput'] | null; // PlayerWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Player" | "Query" | "Realm";

export type NexusGenInputNames = "PlayerCreateInput" | "PlayerCreateManyWithoutRealmInput" | "PlayerCreateWithoutRealmInput" | "PlayerScalarWhereInput" | "PlayerUpdateInput" | "PlayerUpdateManyDataInput" | "PlayerUpdateManyWithWhereNestedInput" | "PlayerUpdateManyWithoutRealmInput" | "PlayerUpdateWithWhereUniqueWithoutRealmInput" | "PlayerUpdateWithoutRealmDataInput" | "PlayerUpsertWithWhereUniqueWithoutRealmInput" | "PlayerWhereInput" | "PlayerWhereUniqueInput" | "RealmCreateInput" | "RealmCreateOneWithoutPopulationInput" | "RealmCreateWithoutPopulationInput" | "RealmUpdateInput" | "RealmUpdateOneRequiredWithoutPopulationInput" | "RealmUpdateWithoutPopulationDataInput" | "RealmUpsertWithoutPopulationInput" | "RealmWhereInput" | "RealmWhereUniqueInput";

export type NexusGenEnumNames = "PlayerOrderByInput" | "RealmOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}