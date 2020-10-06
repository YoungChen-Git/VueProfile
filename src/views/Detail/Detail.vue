<template>
  <div>
    <b-card title="Detail Title" border-variant="light" no-body>
      <b-card-header header-tag="nav">
      <b-nav card-header tabs align="center" >
        <b-nav-item to="/Detail" exact exact-active-class="active"><b-icon icon="kanban"></b-icon>Profile</b-nav-item>
        <b-nav-item to="/Detail/Skill" exact exact-active-class="active" disabled><b-icon icon="images"></b-icon>Photo</b-nav-item>
        <b-nav-item to="/Detail/Project" exact exact-active-class="active"><b-icon icon="laptop"></b-icon>Project</b-nav-item>
        <b-nav-item disabled><b-icon icon="star"></b-icon>My hobby</b-nav-item>
      </b-nav>
      </b-card-header>
      <b-card-body>
        <router-view></router-view>
      </b-card-body>
      <template v-slot:footer>
        <small class="text-muted">Copyright © 2020 Young. All rights reserved.</small>
      </template>
    </b-card>
    
    
  </div>
</template>


