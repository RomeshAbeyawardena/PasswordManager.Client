<template>
    <div>
        <Alert />
        <v-form v-model="isValid">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="0">
                            <v-card-title>
                                <v-icon icon>mdi-account</v-icon>
                                &nbsp;Sign In
                            </v-card-title>
                            <v-card-subtitle>
                                <p>
                                    Enter your e-mail address and password below to obtain access to your
                                    existing registered accounts.
                                </p>
                                <p class="mb-0">
                                    If you have not used this service before
                                    click Register for a free account.
                                </p>
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="emailAddress"
                                      autocomplete="email"
                                      :rules="emailRules"
                                      :counter="255"
                                      label="Email Address"
                                      required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="password"
                                      autocomplete="current-pasword"
                                      :rules="passwordRules"
                                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                      :type="showPassword ? 'text' : 'password'"
                                      :counter="20"
                                      label="Password"
                                      @click:append="showPassword = !showPassword"
                                      required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn color="primary"
                               @click="register">
                            Register
                        </v-btn>
                    </v-col>
                    <v-col align-self="end" class="text-right">
                        <v-btn color="primary"
                               @click="login">
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script type="text/javascript">
    import { StoreActions } from "../store";
    import Alert from "./Alert";
    export default {
        components: {
            Alert
        },
        data: () => ({
            isValid: false,
            emailAddress: "",
            password: "",
            showPassword: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required'
            ]
        }),
        methods: {
            async login() {
                if (this.isValid) {
                    console.log("valid");
                    await this.$store.dispatch(StoreActions.authenticateAccount, {
                        emailAddress: this.emailAddress,
                        password: this.password
                    })
                }
            },
            register() {

            }
        }
    }
</script>