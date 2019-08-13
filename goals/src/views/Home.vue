<template>
  <div id="app">
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <ActivityCreate :categories="categories" />
        </div>
        <div class="column is-9">
          <div class="box content">
            <ActivityItem v-for="activity in activities" :activity="activity" :key="activity.id"></ActivityItem>
            <div class="activity-length">currently {{ acitivityLength }} activities</div>
            <div class="activity-motivation">{{ acitivityMotivation }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ActivityItem from "@/components/ActivityItem";
import ActivityCreate from "@/components/ActivityCreate";
import { fetchActivities, fetchCategories, fetchUser } from "@/api";
export default {
  name: "Home",
  components: {
    ActivityCreate,
    ActivityItem
  },
  data() {
    return {
      creator: "mkz",
      appName: "goals planner",
      items: { 1: { name: "Filip" }, 2: { name: "John" } },
      user: {},
      activities: {},
      categories: {}
    };
  },
  computed: {
    // computed will cache in browser
    // data we need to cache with funcs
    acitivityLength() {
      // it bring back arr.
      return Object.keys(this.activities).length;
    },
    acitivityMotivation() {
      if (this.acitivityLength && this.acitivityLength < 5) {
        return "Nice to see some goals";
      } else if (this.acitivityLength >= 5) {
        return "So many acitivies! good Job";
      } else {
        return "No Activities;";
      }
    }
  },
  created() {
    this.activities = fetchActivities();
    this.user = fetchUser();
    this.categories = fetchCategories();
  },
  methods: {}
};
</script>

<style lang="scss">
html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}
.activity-motivation {
  float: right;
}
.activity-length {
  display: inline-block;
}
.example-wrapper {
  margin-left: 30px;
}

.topNav {
  border-top: 5px solid #3498db;
}
.topNav .container {
  border-bottom: 1px solid #e6eaee;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>
