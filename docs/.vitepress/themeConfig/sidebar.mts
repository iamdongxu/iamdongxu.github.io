/**
 * @author 'Dancy'
 * @description '侧边栏配置项'
 */

import { Sidebar } from "./type/Sidebar.mts";

import Network from "../../src/guide/network/sidebar.mts";
import Pocc from "../../src/guide/pocc/sidebar.mts";
import DataStructure from "../../src/guide/data-structure/sidebar.mts";
import HTML from "../../src/guide/html/sidebar.mts";
import CSS from "../../src/guide/css/sidebar.mts";
import JavaScript from "../../src/guide/javascript/sidebar.mts";
import Chrome from "../../src/guide/chrome/sidebar.mts";
import Vue from "../../src/guide/vue/core/sidebar.mts";
import Vuex from "../../src/guide/vue/vuex/sidebar.mts";
import Pinia from "../../src/guide/vue/pinia/sidebar.mts";
import Router from "../../src/guide/vue/router/sidebar.mts";
import Vite from "../../src/guide/vue/vite/sidebar.mts";
import React from "../../src/guide/react/sidebar.mts";
import WeApp from "../../src/guide/weapp/sidebar.mts";
import Git from "../../src/guide/git/sidebar.mts";
import WebPack from "../../src/guide/webpack/sidebar.mts";
import RollUp from "../../src/guide/rollup/sidebar.mts";
import ESLint from "../../src/guide/eslint/sidebar.mts";
import Prettier from "../../src/guide/prettier/sidebar.mts";
import Node from "../../src/guide/node/sidebar.mts";
import Koa from "../../src/guide/koa/sidebar.mts";
import MySQL from "../../src/guide/mysql/sidebar.mts";
import Nginx from "../../src/guide/nginx/sidebar.mts";
import Interview from "../../src/guide/interview/sidebar.mts";
import Extend from "../../src/guide/extend/sidebar.mts";

export const sidebar: Sidebar = {
  "/guide/network": Network,
  "/guide/pocc": Pocc,
  "/guide/data-structure": DataStructure,
  "/guide/html/": HTML,
  "/guide/css/": CSS,
  "/guide/javascript/": JavaScript,
  "/guide/chrome/": Chrome,
  "/guide/vue/core/": Vue,
  "/guide/vue/vuex/": Vuex,
  "/guide/vue/pinia/": Pinia,
  "/guide/vue/router/": Router,
  "/guide/vue/vite/": Vite,
  "/guide/react/": React,
  "/guide/weapp/": WeApp,
  "/guide/git/": Git,
  "/guide/webpack/": WebPack,
  "/guide/rollup/": RollUp,
  "/guide/eslint/": ESLint,
  "/guide/prettier/": Prettier,
  "/guide/node/": Node,
  "/guide/koa/": Koa,
  "/guide/mysql/": MySQL,
  "/guide/nginx/": Nginx,
  "/guide/interview/": Interview,
  "/guide/extend/": Extend,
};
