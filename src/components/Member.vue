<template>
  <div class="ml-auto">
    <div class="row" v-if="user.length===0">
      <!-- <div class="row" v-if="user.length===0"> -->
      <div class="col-6">
        <!-- <div class="dropdown col-6"> -->
        <button
          type="button"
          class="btn btn-outline-primary"
          data-toggle="modal"
          data-target="#signupModal"
        >註冊</button>
      </div>
      <!-- <button class="btn btn-outline-primary" data-toggle="dropdown" data-flip="false">註冊</button> -->

      <!-- <div class="dropdown-menu dropdown-menu-right" data-offset="400">
          <div class="px-3 py-4">
            <div class="row justify-content-center">
              <div class="col-md-12 shoppingcart-left-menu">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      v-model="signup.account"
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      v-model="signup.password_s"
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="signupToFirebase()"
                  >註冊</button>
                </form>
              </div>
            </div>
          </div>
      </div>-->
      <!--  -->
      <div class="col-6">
        <!-- <div class="dropdown col-6"> -->
        <button
          type="button"
          class="btn btn-outline-primary"
          data-toggle="modal"
          data-target="#loginModal"
        >登入</button>
      </div>
    </div>
    <!-- <button class="btn btn-outline-primary" data-toggle="dropdown" data-flip="false">登入</button> -->
    <!-- <div class="dropdown-menu dropdown-menu-right" style="min-width: 350px;" data-offset="400">
          <div class="px-3 py-4">
            <div class="row justify-content-center">
              <div class="col-md-12 shoppingcart-left-menu">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail11"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      v-model="login.account"
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword11"
                      placeholder="Password"
                      v-model="login.password_l"
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="loginToFirebase()"
                  >登入</button>
                </form>
              </div>
            </div>
            <div class="row">
              <span class="ml-3">或是用其他方式登入</span>
              <div class="ml-3">
                <button class="btn" @click.prevent="loginwithOuter('google')">
                  <i class="fab fa-google fa-2x text-primary"></i>
                </button>
              </div>
              <div class="ml-3">
                <button class="btn" @click.prevent="loginwithOuter('facebook')">
                  <i class="fab fa-facebook fa-2x text-success"></i>
                </button>
              </div>
            </div>
          </div>
    </div>-->
    <!-- 已登入 -->
    <div class="ml-auto" v-if="user.length!==0">
      <!-- <div class="dropdown ml-auto" v-if="user.length!==0"> -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberModal">
        <i class="fas fa-user-check"></i>
      </button>
    </div>
    <!-- <button class="btn btn-primary" data-toggle="dropdown" data-flip="false">
        <i class="fas fa-user-check"></i>
    </button>-->
    <!-- <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px;" data-offset="400">
        <div class="card" style="width: 18rem;border:none;">
          <div class="card-body row">
            <div class="col-4">
              <img :src="user.photoURL" style="max-width: 80px;" alt>
            </div>
            <div class="col-8">
              <h5 class="card-title">name:{{user.displayName}}</h5>
              <span class="card-text">email:{{user.email}}</span>
              <br>
              <span class="card-text" v-if="user.uid==='PaReC1Xb60gwBnTMskMhtBvM43U2'">權限:管理者</span>
              <span class="card-text" v-else>權限:一般會員</span>
            </div>
          </div>
          <div class="card-footer text-muted row justify-content-end">
            <button class="btn btn-danger px-3" @click="logOut()">登出</button>
          </div>
        </div>
    </div>-->
    <!-- 已登入 -->
    <div
      class="modal fade"
      id="signupModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signupModalLabel">註冊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class>
              <div class="row justify-content-center">
                <div class="col-md-12 shoppingcart-left-menu">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">電子郵件</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        v-model="signup.account"
                      >
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">密碼</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        v-model="signup.password_s"
                      >
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click.prevent="signupToFirebase()"
                    >註冊</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">登入</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-md-12 shoppingcart-left-menu">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail11"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      v-model="login.account"
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">密碼</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword11"
                      placeholder="Password"
                      v-model="login.password_l"
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="loginToFirebase()"
                  >登入</button>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-6">或是用其他方式登入</div>
            <div class="col-3">
              <button class="btn" @click.prevent="loginwithOuter('google')">
                <i class="fab fa-google fa-2x text-primary"></i>
              </button>
            </div>
            <div class="col-3">
              <button class="btn" @click.prevent="loginwithOuter('facebook')">
                <i class="fab fa-facebook fa-2x text-success"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="memberModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="memberModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="memberModalLabel">{{user.displayName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card" style="width: 18rem;border:none;">
              <div class="card-body row">
                <div class="col-4">
                  <img :src="user.photoURL" style="max-width: 80px;" alt>
                </div>
                <div class="col-8">
                  <span class="card-text">email:{{user.email}}</span>
                  <br>
                  <span class="card-text" v-if="user.uid==='PaReC1Xb60gwBnTMskMhtBvM43U2'">權限:管理者</span>
                  <span class="card-text" v-else>權限:一般會員</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <button class="btn btn-danger" @click="logOut()">登出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

const { firebase } = window; //
const { firebaseDb } = window; //
const { firebaseAuth } = window; //


export default {
  name: 'Member',
  data() {
    return {
      user: '',
      isAuth: false, // Is authorized flag
      signup: {
        account: '',
        password_s: '',
      },
      login: {
        account: '',
        password_l: '',
      },
    };
  },
  methods: {
    signupToFirebase() {
      const vm = this;
      const response = {
        message: '',
        status: '',
      };
      const email = vm.signup.account;
      const password = vm.signup.password_s;
      firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userUid = user.user.uid;
          const signupUser = {
            email,
            password,
            userUid,
          };
          firebaseDb.ref(`/user/${userUid}`).set(signupUser);
          response.message = '註冊成功';
          response.status = 'success';
          vm.$store.dispatch('messageModules/updateMessage', response, { root: true });
        }).catch((error) => {
          const errorMessage = error.message;
          response.message = errorMessage;
          response.status = 'danger';
          console.log('vm', vm.signup);
          vm.$store.dispatch('messageModules/updateMessage', response, { root: true });
        });
    },
    loginToFirebase() {
      const vm = this;
      const response = {
        message: '',
        status: '',
      };
      console.log('loginToFirebase():', vm.login.account, vm.login.password);
      const email = vm.login.account;
      const password = vm.login.password_l;
      firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          $('#loginModal').modal('hide'); //
          console.log('登入成功');
          response.message = '登入成功';
          response.status = 'success';
          vm.$store.dispatch('messageModules/updateMessage', response, { root: true });
        }).catch((error) => {
          console.log('登入失敗');
          console.log(error);
        });
    },
    loginwithOuter(outer) {
      const response = {
        message: '',
        status: '',
      };
      const vm = this;
      let provider = '';
      switch (outer) {
        case 'google':
          provider = new firebase.auth.GoogleAuthProvider();
          break;
        case 'facebook':
          provider = new firebase.auth.FacebookAuthProvider();
          break;
        default:
          break;
      }
      firebaseAuth.signInWithPopup(provider)
        .then((result) => {
          const signupUser = {
            email: result.user.email,
            type: outer,
            uid: result.user.uid,
          };
          $('#loginModal').modal('hide'); //
          firebaseDb.ref(`/user/${result.user.uid}`).set(signupUser);
          this.user = result.user;
          // vm.$store.dispatch('updateUser', result.user, { root: true });
          this.$store.dispatch('updateUser', this.user.uid, { root: true });
          response.message = '登入成功';
          response.status = 'success';
          vm.$store.dispatch('messageModules/updateMessage', response, { root: true });
        }).catch(err => console.error(err));
      // }).catch(err => console.error(error));
    },

    logOut() {
      firebaseAuth.signOut()
        .then(() => {
          $('#memberModal').modal('hide'); //
          this.user = '';
          this.$store.dispatch('updateUser', '', { root: true });
          this.isAuth = false;
        }).catch((err) => { console.log(err); });
    },
  },
  beforeCreate() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.$store.dispatch('updateUser', user.uid, { root: true });
        this.isAuth = true;
      }
    });
  },
  created() {
    console.log('firebaseDb:', firebaseDb);
    console.log('firebaseAuth:', firebaseAuth);
  },
};
</script>
